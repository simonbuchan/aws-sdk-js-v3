import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "../commands/ListSecurityProfilesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListSecurityProfilesCommandInput,
  ...args: any
): Promise<ListSecurityProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityProfilesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoT,
  input: ListSecurityProfilesCommandInput,
  ...args: any
): Promise<ListSecurityProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listSecurityProfiles(input, ...args);
};
export async function* listSecurityProfilesPaginate(
  config: IoTPaginationConfiguration,
  input: ListSecurityProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSecurityProfilesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
