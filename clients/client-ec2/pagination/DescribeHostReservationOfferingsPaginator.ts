import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeHostReservationOfferingsCommand,
  DescribeHostReservationOfferingsCommandInput,
  DescribeHostReservationOfferingsCommandOutput,
} from "../commands/DescribeHostReservationOfferingsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeHostReservationOfferingsCommandInput,
  ...args: any
): Promise<DescribeHostReservationOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeHostReservationOfferingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeHostReservationOfferingsCommandInput,
  ...args: any
): Promise<DescribeHostReservationOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.describeHostReservationOfferings(input, ...args);
};
export async function* describeHostReservationOfferingsPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeHostReservationOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeHostReservationOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeHostReservationOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
