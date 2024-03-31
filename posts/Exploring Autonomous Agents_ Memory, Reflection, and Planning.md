---
title: Exploring Autonomous Agents. Memory, Reflection, and Planning
description: A deep dive into the world of autonomous agents and the technologies that power them.
slug: exploring-autonomous-agents-memory-reflection-and-planning
date: July 10, 2023
published: true
---
# (coscup) Exploring Autonomous Agents: Memory, Reflection, and Planning  筆記
![](https://hackmd.io/_uploads/S1teXv_Uh.png)
## Autonomous Agents:
Autonomous agents can be thought of as language model-powered bots that can break down complex problems and iteratively solve them, taking action on users’ behalf. We can use a simple example to illustrate what is possible with just an LLM, an agent, and with autonomous agents. With just an LLM, we can look up the best restaurants in a given city. With an agent, we can tell it to look up the highest rated restaurant with a table available and book the table for two. With an autonomous agent, we can ask it to find the best restaurant that fits into my schedule and my preferences then book it for me and my best friend. Autonomous agents can do this by breaking down a task into subtasks and using memory between each step to guide the agent’s actions.
1. [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT)
2. [BabyAGI](https://github.com/yoheinakajima/babyagi)
3. [ThinkGPT](https://github.com/jina-ai/thinkgpt)
4. [Gernerative Agents](https://www.arxiv-vanity.com/papers/2304.03442/)

## 1. AutoGPT
Auto-GPT is an experimental open-source application showcasing the capabilities of the GPT-4 language model. This program, driven by GPT-4, chains together LLM "thoughts", to autonomously achieve whatever goal you set. It’s an infinite loop of generating thoughts, reasoning, generating plans, criticizing, planning the next action, and executing. As one of the first examples of GPT-4 running fully autonomously, Auto-GPT pushes the boundaries of what is possible with AI. 

In the executing step, AutoGPT can execute many commands such as Google Search, browse websites, write to files, and even execute Python files!

### Current limitations:
1. 记忆召回问题。如果只是做简单的 embedding 相似性召回，很容易发现召回的结果不是很好。这里应该也有不少可以改进的空间，例如前面提到的 Generative Agents 里对于记忆的更细致的处理，LlamaIndex 中对于 index 结构的设计也有很多可以选择与调优的地方。
2. 错误累积问题。网上给出的很多例子应该都是做了 cherry-picking 的，实际上模型总体表现并没有那么惊艳，反而经常在前面一些步骤就出现了偏差，然后逐渐越跑越远……这里一个很重要的问题可能还是任务拆解执行，外部工具利用等方面的高质量训练数据相对匮乏。这应该也是 OpenAI 为啥要自己来做 plugin 体系的原因之一。
3. 探索效率问题。对于很多简单的场景，目前通过模型 agent 来自行探索并完成整个解决过程还是比较繁琐耗时，agent 也很容易把问题复杂化。考虑到 LLM 调用的成本，要在实际场景落地使用也还需要在这方面做不少优化。一种方式可能是像 AutoGPT 那样可以中途引入人工的判断干预和反馈输入。
4. 任务终止与结果验证。在一些开放性问题或者无法通过明确的评估方式来判断结果的场景下，模型 agent 的工作如何终止也是一个挑战。这也回到了前面提到的，执行 task 相关的数据收集与模型训练以及强化学习的应用或许可以帮助解决这个问题。
1. **Inadequate problem decomposition:** The effectiveness of a divide-and-conquer approach largely depends on the ability to break down complex problems into smaller, manageable subproblems. GPT-3.5/4, despite its improvements, still struggles to consistently and effectively decompose problems in a manner that allows for efficient and accurate solutions. Human reasoning can often identify multiple ways to decompose a problem, while GPT-3.5/4 may not have the same level of adaptability or creativity.
2. **Difficulty in identifying appropriate base cases:** Humans can intuitively choose appropriate ones that lead to efficient solutions. In contrast, GPT-3.5/4 may struggle to identify the most effective base cases for a given problem, which can significantly impact the overall efficiency and accuracy of the divide-and-conquer process.
3. **Insufficient understanding of problem context:** While humans can leverage their domain knowledge and contextual understanding to tackle complex problems better, GPT-3.5/4 is limited by its pre-trained knowledge and may lack the necessary context to efficiently solve certain problems using divide-and-conquer techniques.
4. **Handling overlapping subproblems:** Humans can often recognize when solving overlapping subproblems and strategically reuse previously computed solutions. GPT-3.5/4, on the other hand, may not always have the same level of awareness and may end up redundantly solving the same subproblems multiple times, leading to inefficient solutions.

Currently, agents run like your run-of-the-mill MBA graduate or entry level consultant: they are very good at describing plausible solutions but very poor at executing on them. Put another way, the exacution component of agents performs poorly in unconstrained environments (it's constrained to a predefined action space), and it is clear that the agent isn’t able to reason at a deeper level about novel situations or problem solve on the fly. A concrete example of this is that agents often hit a wall when the output of an action isn’t what they expect: they try to pull up a tweet, hit a 403: Unauthorized error, and are not quite sure what to do next as they have no notion that calling Twitter might give a different response if the user is not logged in. Practically speaking, the current generation of agents still need quite a bit of human intervention and direction to be effective.

### Hurdles to overcome
1. Logical reasoning != good execution: In principle GPT-4 is capable of chain-of-thought reasoning and decomposing tasks into multi-step processes. But in practice, the agent often struggles with executing on their own sub-tasks. They struggle to know when to “take a step back,” leading to getting stuck doing the same task in a loop, or may hallucinate a step and get stuck because there is little external feedback.
2. Compute costs: The architecture of these applications rely on recursive loops, which can lead to many repetitive calls of your LLM. The cost is relatively low per call today with tools like OpenAI’s APIs (but may run into API limits!), but with in-house models, the cost equation may be quite different. 
3. Learning: Because the autonomous agents are spun up and not subsequently reused, they do not learn from the prompts or from prior attempts, and don’t learn much from their mistakes. Services that help agents persist are on the horizon, though, which should make managing them easier.
### So what's next?
>In what ways can the Open-Source community make a contribution to AutoGPT?


## 2. BabyAGI
The key feature of BabyAGI is just three agents: Task Execution Agent, Task Creation Agent, and Task Prioritization Agent.

1) The task execution agent completes the first task from the task list
2) The task creation agent creates new tasks based on the objective and result of the previous task.
3) The task prioritization agent then reorders the tasks.
And then this simple process gets repeated over and over.

In a LangChain webinar, the creator of babyagi mentioned that he designed BabyAGI in a way to emulate how he works. Specifically, he starts each morning by tackling the first item on his to-do list and then works through his tasks. If a new task arises, he simply adds it to his list. At the end of the day, he reevaluates and reprioritizes his list. This same approach was then mapped onto the agent.

![](https://hackmd.io/_uploads/H1vmQy5r3.png)
BabyAGI flow chart. Source:https://yoheinakajima.com/task-driven-autonomous-agent-utilizing-gpt-4-pinecone-and-langchain-for-diverse-applications/ (funny thing that GPT-4 wrote this research paper)

⭐BabyAGI + LangChain⭐
BabyAGI is easy to run within the LangChain framework. Check out the code [here](https://python.langchain.com/en/latest/use_cases/agents/baby_agi.html). It basically creates a BabyAGI controller which composes of three chains TaskCreationChain, TaskPrioritizationChain, and ExecutionChain, and runs them in a (potentially-)infinite loop. With Langchain, you can define the max iterations, so that it doesn’t run forever and spend all the money on OpenAI API.

```python=OBJECTIVE = "Write a weather report for SF today"
llm = OpenAI(temperature=0)
# Logging of LLMChains
verbose=False
# If None, will keep on going forever
max_iterations: Optional[int] = 3
baby_agi = BabyAGI.from_llm(
    llm=llm,
    vectorstore=vectorstore,
    verbose=verbose,
    max_iterations=max_iterations
)
baby_agi({"objective": OBJECTIVE})
Here is the result from 2 iteration runs:
```
Here is the result from 2 iteration runs:
![](https://hackmd.io/_uploads/SJ_9mJqS2.png)



## 3. ThinkGPT
### memory system abstraction:
### code implementation:

## 4. Generative Agents
![](https://hackmd.io/_uploads/HJeTXlFB2.png)

Researchers from Stanford and Google created an interactive sandbox environment with 25 generative AI agents that can simulate human behavior. They walk in the park, join for coffee at a cafe, and share news with colleagues. They demonstrated surprisingly good social behaviors:

“For example, starting with only a single user-specified notion that one agent wants to throw a Valentine’s Day party, the agents autonomously spread invitations to the party over the next two days, make new acquaintances, ask each other out on dates to the party, and coordinate to show up for the party together at the right time.”

These believable simulations of human behavior are possible because of an agent architecture (see Figure 2) that extends a large language model with three important architecture basics: memory, reflection, and planning.
### memory system abstraction:
The architecture comprises three main components:
1. The first is *memory stream*, a long-term memory module that records, in natural language, a comprehensive list of the agent’s experiences. The retrieval model combines relevance, recency, and importance to surface the records that are needed to inform the agent’s moment-to-moment behavior. 
2. The second is *reflection*, which synthesizes memories into higher-level inferences over time, enabling the agent to draw conclusions about itself and others to better guide its behavior. 
3. The third is *planning*, which translates those conclusions and the current environment into high-level action plans and then recursively into detailed behaviors for action and reaction. These reflections and plans are fed back into the memory stream to influence the agent’s future behavior.

![](https://hackmd.io/_uploads/ByCW6VOr3.png)
Figure: Generative agent architecture. Source: https://arxiv.org/pdf/2304.03442.pdf

### code implementation:
1. Memory stream: This is implemented in the update_memories method and is supported by the compress_memories method.
```python=
def update_memories(self, other_agents, global_time, action_results):
        
        """
        Updates the agent's memories based on their interactions with other agents.
        
        Parameters:
        -----------
        other_agents : list
            A list of other Agent objects in the simulation.
        global_time : int
            The current time in the simulation.
        action_results : dict
            A dictionary of the results of each agent's action.
        """

        for agent in other_agents:
            if agent.location == self.location:
                self.memories.append('[Time: {}. Person: {}. Memory: {}]\n'.format(str(global_time), agent.name, action_results[agent.name]))

    def compress_memories(self, global_time, MEMORY_LIMIT=10):

        """
        Compresses the agent's memories to a more manageable and relevant set.
        
        Parameters:
        -----------
        global_time : int
            The current time in the simulation.
        MEMORY_LIMIT : int, optional
            The maximum number of memories to compress. Default is 10.

        Returns:
        --------
        memory_string : str
            The compressed memory string.
        """

        memories_sorted = sorted(self.memory_ratings, key=lambda x: x[1], reverse=True)
        relevant_memories = memories_sorted[:MEMORY_LIMIT]
        memory_string_to_compress = '.'.join([a[0] for a in relevant_memories])
        return '[Recollection at Time {}:00: {}]'.format(str(global_time), memory_string_to_compress)
```
2. Reflection: This is implemented in the rate_memories method, which rates the agent's memories based on their relevance and importance.
```python=
def rate_memories(self, locations, global_time, prompt_meta):

        """
         Rates the agent's memories based on their relevance and importance.
        
        Parameters:
        -----------
        locations : Locations
            The Locations object representing different areas in the simulated environment.
        global_time : int
            The current time in the simulation.
        prompt_meta : str
            The prompt used to rate the memories.

        Returns:
        --------
        memory_ratings : list
            A list of tuples representing the memory, its rating, and the generated response.
        """

        memory_ratings = []
        for memory in self.memories:
            prompt = "You are {}. Your plans are: {}. You are currently in {}. It is currently {}:00. You observe the following: {}. Give a rating, between 1 and 5, to how much you care about this.".format(self.name, self.plans, locations.get_location(self.location), str(global_time), memory)
            res = generate(prompt_meta.format(prompt), self.use_openai)
            rating = get_rating(res)
            max_attempts = 2
            current_attempt = 0
            while rating is None and current_attempt < max_attempts:
                rating = get_rating(res)
                current_attempt += 1
            if rating is None:
                rating = 0
            memory_ratings.append((memory, rating, res))
        self.memory_ratings = memory_ratings
        return memory_ratings
```
3. Planning: This is implemented in the plan method, which generates the agent's daily plan.
```python=
    def plan(self, global_time, prompt_meta):
        """
        Generates the agent's daily plan.
        
        Parameters:
        -----------
        global_time : int
            The current time in the simulation.
        prompt_meta : str
            The prompt used to generate the plan.
        """

        prompt = "You are {}. The following is your description: {} You just woke up. What is your goal for today? Write it down in an hourly basis, starting at {}:00. Write only one or two very short sentences. Be very brief. Use at most 50 words.".format(self.name, self.description, str(global_time))
        self.plans = generate(prompt_meta.format(prompt), self.use_openai)
```


## 5. Reflexion
## 6. ReAct


---

---

## Drawing Inspiration From Neural Science
1. Tolman Eichenbaum Machine
2. Hippocampus
    cozoDB

RL好像做memory做蠻久的了

list of interests:
1. autogpt, langchain vs github
2. babyagi
3. ReAct alfworld, langchain vs github version
4. TeenageAGI
5. cozodb
6. thinkgpt
7. write long novel capability
8. reflexion
9. try autogpt and babyagi