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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { FileSystemDescription, UpdateFileSystemRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFileSystemCommand,
  serializeAws_restJson1UpdateFileSystemCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateFileSystemCommandInput extends UpdateFileSystemRequest {}
export interface UpdateFileSystemCommandOutput extends FileSystemDescription, __MetadataBearer {}

/**
 * <p>Updates the throughput mode or the amount of provisioned throughput of an existing file
 *       system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, UpdateFileSystemCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, UpdateFileSystemCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new UpdateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFileSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class UpdateFileSystemCommand extends $Command<
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFileSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "UpdateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFileSystemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FileSystemDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFileSystemCommandOutput> {
    return deserializeAws_restJson1UpdateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
