const topics = [
    {
        keywords: ["hi", "hello", "hey"],
        answer: "Hi! 👋 How can I help you?"
    },
    {
        keywords : ["getting started", "help", "what is this", "how does this work"],
        answer : "NexTask helps you plan and track tasks on a board: Todo → In-progress → Done. Set priorities, deadlines, switch themes, and check your progress in Statistics."
    },
    {
        keywords : ["add", "create", "new task"],
        answer : "Tap 'Add Task' (top right of the Board page). Fill in title, description, priority, and an optional deadline, then save."
    },
    {
        keywords : ["edit", "update", "change task", "rename"],
        answer : "Tap the pencil icon on any task card to edit its title, description, priority, or deadline."
    },
    {
        keywords : ["move", "status", "column", "drag"],
        answer : "Drag and drop a task card into another column (Todo, In-progress, or Done) to update its status."
    },
    {
        keywords : ["priorit", "high", "medium", "low", "urgent"],
        answer : "Priorities are Low, Medium, or High — they help you visually spot what's urgent on the board."
    },
    {
        keywords : ["deadline", "due date", "date", "overdue"],
        answer : "Deadlines are optional. Set one when creating or editing a task — it shows right on the card."
    },
    {
        keywords : ["search", "filter", "find task"],
        answer : "Use the search icon and the priority filter at the top of the Board to quickly find tasks."
    },
    {
        keywords : ["stat", "chart", "pie", "donut", "progress bar", "percentage"],
        answer : "The Statistics page shows task counts per status (Todo/In-progress/Done) plus a chart of the overall breakdown."
    },
    {
        keywords : ["theme", "color", "dark", "light", "appearance", "mode"],
        answer : "Go to Settings → Appearance, then tap any theme card to apply it instantly. It saves automatically."
    },
    {
        keywords : ["delete all", "clear tasks", "remove everything"],
        answer : "Settings → Danger zone → 'Delete tasks' removes every task but keeps your theme. This can't be undone."
    },
    {
        keywords : ["delete", "trash"],
        answer : "Tap the trash icon on a task card to delete just that one task."
    },
    {
        keywords : ["reset", "wipe", "start over", "factory"],
        answer : "Settings → Danger zone → 'Reset everything' wipes all tasks and preferences. This can't be undone."
    },
    {
        keywords : ["who are you", "assistant", "bot", "ai"],
        answer : "I'm a simple built-in helper for NexTask — I answer questions about tasks, priorities, themes, and settings."
    },
    {
        keywords: ["bye", "goodbye", "see you"],
        answer: "Goodbye! 👋 See you later."
    },
    {
        keywords: ["thanks", "thank you", "thx", "ty", "appreciate"],
        answer: "You're welcome! Let me know if you need anything else."
    },
    {
        keywords: ["menu", "options", "commands", "what can you do"],
        answer: "Here's what I can help with: • Adding, editing, moving, deleting tasks • Priorities & deadlines • Search & filter • Statistics page • Themes & appearance • Reset / delete all data. Just type a question about any of these!"
    }
]

function getReply(message){
    const msg = message.toLowerCase()

    const topic = topics.find((topic)=>{
        return topic.keywords.some((keyword)=>{
            return msg.includes(keyword)
        })
    })

    let reply = topic 
        ? topic.answer 
        : 'Not sure about that one — type "menu" to see some of what I can help with.'

    return new Promise((res)=>{
        setTimeout(()=>{
            res(reply)
        }, 1000)
    })    
}

export default getReply