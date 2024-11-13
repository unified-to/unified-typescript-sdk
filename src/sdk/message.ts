/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messageCreateMessagingMessage } from "../funcs/messageCreateMessagingMessage.js";
import { messageGetMessagingMessage } from "../funcs/messageGetMessagingMessage.js";
import { messageListMessagingMessages } from "../funcs/messageListMessagingMessages.js";
import { messagePatchMessagingMessage } from "../funcs/messagePatchMessagingMessage.js";
import { messageRemoveMessagingMessage } from "../funcs/messageRemoveMessagingMessage.js";
import { messageUpdateMessagingMessage } from "../funcs/messageUpdateMessagingMessage.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Message extends ClientSDK {
  /**
   * Create a message
   */
  async createMessagingMessage(
    request: operations.CreateMessagingMessageRequest,
    options?: RequestOptions,
  ): Promise<shared.MessagingMessage> {
    return unwrapAsync(messageCreateMessagingMessage(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a message
   */
  async getMessagingMessage(
    request: operations.GetMessagingMessageRequest,
    options?: RequestOptions,
  ): Promise<shared.MessagingMessage> {
    return unwrapAsync(messageGetMessagingMessage(
      this,
      request,
      options,
    ));
  }

  /**
   * List all messages
   */
  async listMessagingMessages(
    request: operations.ListMessagingMessagesRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.MessagingMessage>> {
    return unwrapAsync(messageListMessagingMessages(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a message
   */
  async patchMessagingMessage(
    request: operations.PatchMessagingMessageRequest,
    options?: RequestOptions,
  ): Promise<shared.MessagingMessage> {
    return unwrapAsync(messagePatchMessagingMessage(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a message
   */
  async removeMessagingMessage(
    request: operations.RemoveMessagingMessageRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveMessagingMessageResponse | undefined> {
    return unwrapAsync(messageRemoveMessagingMessage(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a message
   */
  async updateMessagingMessage(
    request: operations.UpdateMessagingMessageRequest,
    options?: RequestOptions,
  ): Promise<shared.MessagingMessage> {
    return unwrapAsync(messageUpdateMessagingMessage(
      this,
      request,
      options,
    ));
  }
}
