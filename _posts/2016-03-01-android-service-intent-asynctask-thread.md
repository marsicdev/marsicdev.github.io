---
layout:     post
title:      "Android: Service, IntentService, AsyncTask and Thread"
date:       2016-03-01 18:00:00
author:     "Marko Arsic"
summary:	  Knowing when to use each call is essential to leveraging the system's performance to your benefit.
---

## Service

A [Service](http://developer.android.com/guide/components/services.html) is an application component that can perform long-running operations in the background and does not provide a user interface. Another application component can start a service and it will continue to run in the background even if the user switches to another application. Additionally, a component can bind to a service to interact with.

### When, how, where?

**When to use?**
- Task with no UI, but shouldn't be too long. Use threads within service for long tasks.
- Long task in general.

**Trigger:** Call to method `onStartService()`

**Triggered from:** Any Thread

**Runs on:**  Main thread of its hosting process. The service does not create its own thread and does not run in a separate process (unless you specify otherwise)

### Limitations / Drawbacks

May block main thread

## IntentService

[IntentService](http://developer.android.com/reference/android/app/IntentService.html) is a simple type of service that can be used to handle asynchronous work off the main thread by way of Intent requests. Each intent is added to the IntentService's queue and handled sequentially.

### When, how, where?

**When to use?**
- Long task usually with no communication to main thread. If communication is required, can use main thread handler or broadcast intents
- When callbacks are needed (Intent triggered tasks).

**Trigger:** The IntentService is triggered using an Intent, it spawns a new worker thread and the method `onHandleIntent()` is called on this thread.

**Triggered from:** Main Thread (Intent is received on main thread and then worker thread is spawed)

**Runs on:** Separate worker thread

### Limitations / Drawbacks

- Cannot run tasks in parallel.
- Multiple intents are queued on the same worker thread.

## AsyncTask

[AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html) enables proper and easy use of the UI thread. This class allows performing background operations and publishing results on the UI thread without having to manipulate threads and/or handlers. An asynchronous task is defined by a computation that runs on a background thread and whose result is published on the UI thread.

### When, how, where?

**When to use?**
- Small task having to communicate with main thread
- For tasks in parallel use multiple instances OR Executor
- Disk-bound tasks that might take more than a few milliseconds

**Trigger:** Call to method `execute()`

**Triggered from:** Main Thread

**Runs on:** Worker thread. However, Main thread methods may be invoked in between to publish progress.

### Limitations / Drawbacks

- One instance can only be executed once (hence cannot run in a loop) 
- Must be created and executed from the Main thread

## Thread

A [Thread](http://developer.android.com/reference/java/lang/Thread.html) is a concurrent unit of execution. It has its own call stack. There are two methods to implement threads in applications. One is providing a new class that extends Thread and overriding its run() method. The other is providing a new Thread instance with a Runnable object during its creation.

### When, how, where?

- Long task in general (Network operations which involve moderate to large amounts of data either uploading or downloading)
- High-CPU tasks which need to be run in the background
- For tasks in parallel use Multiple threads (traditional mechanisms)
- Any task where you want to control the CPU usage relative to the GUI thread

**Trigger:** Thread `start()` method. You can set the "Priority" of a thread by calling its `setPriority(int)` method.

**Triggered from:** Any Thread

**Runs on:** It's own thread

### Limitations / Drawbacks

- Manual thread management
- Code may become difficult to read
