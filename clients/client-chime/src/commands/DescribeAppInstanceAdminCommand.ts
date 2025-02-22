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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DescribeAppInstanceAdminRequest, DescribeAppInstanceAdminResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppInstanceAdminCommand,
  serializeAws_restJson1DescribeAppInstanceAdminCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAppInstanceAdminCommandInput extends DescribeAppInstanceAdminRequest {}
export interface DescribeAppInstanceAdminCommandOutput extends DescribeAppInstanceAdminResponse, __MetadataBearer {}

/**
 * <p>Returns the full details of an <code>AppInstanceAdmin</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeAppInstanceAdminCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeAppInstanceAdminCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class DescribeAppInstanceAdminCommand extends $Command<
  DescribeAppInstanceAdminCommandInput,
  DescribeAppInstanceAdminCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAppInstanceAdminCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppInstanceAdminCommandInput, DescribeAppInstanceAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeAppInstanceAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAppInstanceAdminRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAppInstanceAdminResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAppInstanceAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAppInstanceAdminCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppInstanceAdminCommandOutput> {
    return deserializeAws_restJson1DescribeAppInstanceAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
