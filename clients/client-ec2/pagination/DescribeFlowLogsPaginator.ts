import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeFlowLogsCommand,
  DescribeFlowLogsCommandInput,
  DescribeFlowLogsCommandOutput,
} from "../commands/DescribeFlowLogsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeFlowLogsCommandInput,
  ...args: any
): Promise<DescribeFlowLogsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFlowLogsCommand(input, ...args));
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeFlowLogsCommandInput,
  ...args: any
): Promise<DescribeFlowLogsCommandOutput> => {
  // @ts-ignore
  return await client.describeFlowLogs(input, ...args);
};
export async function* describeFlowLogsPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeFlowLogsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFlowLogsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeFlowLogsCommandOutput;
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
