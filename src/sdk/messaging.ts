/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messagingCreateMessagingMessage } from "../funcs/messagingCreateMessagingMessage.js";
import { messagingGetMessagingChannel } from "../funcs/messagingGetMessagingChannel.js";
import { messagingGetMessagingMessage } from "../funcs/messagingGetMessagingMessage.js";
import { messagingListMessagingChannels } from "../funcs/messagingListMessagingChannels.js";
import { messagingListMessagingMessages } from "../funcs/messagingListMessagingMessages.js";
import { messagingPatchMessagingMessage } from "../funcs/messagingPatchMessagingMessage.js";
import { messagingRemoveMessagingMessage } from "../funcs/messagingRemoveMessagingMessage.js";
import { messagingUpdateMessagingMessage } from "../funcs/messagingUpdateMessagingMessage.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Messaging extends ClientSDK {
  /**
   * Create a message
   */
  async createMessagingMessage(
    request: operations.CreateMessagingMessageRequest,
    options?: RequestOptions,
  ): Promise<shared.MessagingMessage> {
    return unwrapAsync(messagingCreateMessagingMessage(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a channel
   */
  async getMessagingChannel(
    request: operations.GetMessagingChannelRequest,
    options?: RequestOptions,
  ): Promise<shared.MessagingChannel> {
    return unwrapAsync(messagingGetMessagingChannel(
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
    return unwrapAsync(messagingGetMessagingMessage(
      this,
      request,
      options,
    ));
  }

  /**
   * List all channels
   */
  async listMessagingChannels(
    request: operations.ListMessagingChannelsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.MessagingChannel>> {
    return unwrapAsync(messagingListMessagingChannels(
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
    return unwrapAsync(messagingListMessagingMessages(
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
    return unwrapAsync(messagingPatchMessagingMessage(
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
  ): Promise<void> {
    return unwrapAsync(messagingRemoveMessagingMessage(
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
    return unwrapAsync(messagingUpdateMessagingMessage(
      this,
      request,
      options,
    ));
  }
}
