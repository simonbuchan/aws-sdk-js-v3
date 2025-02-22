import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { GetDeviceRequest, GetDeviceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDeviceCommand,
  serializeAws_restJson1GetDeviceCommand,
} from "../protocols/Aws_restJson1";

export interface GetDeviceCommandInput extends GetDeviceRequest {}
export interface GetDeviceCommandOutput extends GetDeviceResponse, __MetadataBearer {}

/**
 * <p>Retrieves the devices available in Amazon Braket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, GetDeviceCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, GetDeviceCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new GetDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 */
export class GetDeviceCommand extends $Command<
  GetDeviceCommandInput,
  GetDeviceCommandOutput,
  BraketClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeviceCommandInput, GetDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
    const commandName = "GetDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceCommandOutput> {
    return deserializeAws_restJson1GetDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
