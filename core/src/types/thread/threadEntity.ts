import { ModelInfo } from '../model'

/**
 * The `Thread` type defines the shape of a thread object.
 * @stored
 */
export type Thread = {
  /** Unique identifier for the thread, generated by default using the ULID method. **/
  id: string
  /** Object name **/
  object: string
  /** The title of this thread. **/
  title: string
  /** Assistants in this thread. **/
  assistants: ThreadAssistantInfo[]
  /** The timestamp indicating when this thread was created, represented in ISO 8601 format. **/
  created: number
  /** The timestamp indicating when this thread was updated, represented in ISO 8601 format. **/
  updated: number
  /** The additional metadata of this thread. **/
  metadata?: Record<string, unknown>
}

/**
 * Represents the information about an assistant in a thread.
 * @stored
 */
export type ThreadAssistantInfo = {
  assistant_id: string
  assistant_name: string
  model: ModelInfo
  instructions?: string
}

/**
 * Represents the state of a thread.
 * @stored
 */
export type ThreadState = {
  hasMore: boolean
  waitingForResponse: boolean
  error?: Error
  lastMessage?: string
  isFinishInit?: boolean
}