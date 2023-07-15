import { BatchDeleteMessageDto, BatchDeleteMessageResult, BatchPublishMessageDto, BatchPublishMessageResult, BatchReceiveMessageDto, BatchReceiveMessageResult, BatchSendMessageDto, BatchSendMessageResult, DeleteMessageDto, Dto, Option, PublishMessageDto, PublishMessageResult, ReceiveMessageDto, ReceiveMessageResult, Result, SendMessageDto, SendMessageResult } from './types';
import { AxiosRequestConfig } from 'axios';
import { Client } from 'tencentcloud-sdk-nodejs/tencentcloud/services/tdmq/v20200217/tdmq_client';
export declare class CMQ {
    private option;
    /**
     * 请求协议
     */
    private protocol;
    /**
     * 请求固定路径
     */
    private path;
    /**
     * 云 API
     * 控制流支持方式
     */
    api?: Client;
    constructor(option: Option);
    /**
     * 发起数据流请求
     */
    send<T, R>(data: T & Dto, config?: AxiosRequestConfig): Promise<R>;
    /**
     * 发送消息
     * @param data
     */
    sendMessage(data: SendMessageDto): Promise<SendMessageResult>;
    /**
     * 批量发送消息
     * @param data
     */
    batchSendMessage(data: BatchSendMessageDto): Promise<BatchSendMessageResult>;
    /**
     * 设置超时
     * @param data
     * @private
     */
    private static pollingWaitTime;
    /**
     * 消费消息
     * @param data
     */
    receiveMessage(data: ReceiveMessageDto): Promise<ReceiveMessageResult>;
    /**
     * 批量消费消息
     * @param data
     */
    batchReceiveMessage(data: BatchReceiveMessageDto): Promise<BatchReceiveMessageResult>;
    /**
     * 删除消息
     * @param data
     */
    deleteMessage(data: DeleteMessageDto): Promise<Result>;
    /**
     * 批量删除消息
     * @param data
     */
    batchDeleteMessage(data: BatchDeleteMessageDto): Promise<BatchDeleteMessageResult>;
    /**
     * 发布消息
     * @param data
     */
    publishMessage(data: PublishMessageDto): Promise<PublishMessageResult>;
    /**
     * 批量发布消息
     * @param data
     */
    batchPublishMessage(data: BatchPublishMessageDto): Promise<BatchPublishMessageResult>;
}
