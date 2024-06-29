let userName = "";
let todos = [];
let number = "";
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
];

function getReply(command) {
  command = command.toLowerCase();

  if (command.startsWith("hello my name is ")) {
    const name = command.replace("hello my name is ", "");
    if (userName && userName === name) {
      return `You've already introduced yourself as ${userName}.`;
    } else {
      userName = name;
      return `Nice to meet you, ${userName}.`;
    }
  }
  if (command === "what is my name") {
    if (userName) {
      return `Your name is ${userName}.`;
    } else {
      return "I don't know your name yet.";
    }
  }
  if (command.startsWith("add ")) {
    const todo = command.replace("add ", "").replace(" to my todo", "");
    todos.push(todo);
    return `${todo} added to your todo.`;
  }
  if (command.startsWith("add ")) {
    const todo = command.replace("add ", "").replace(" to my todo", "");
    todos.push(todo);
    return `${todo} added to your todo.`;
  }
  if (command.startsWith("remove")) {
    const todo = command.replace("remove", "").replace(" from my todo", "");
    const index = todos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${todo} from your todo.`;
    } else {
      return `${todo} is not in your todo.`;
    }
  }
  if (command === "what is on my todo") {
    if (todos.length > 0) {
      return `You have ${todos.length} todos: ${todos.join(", ")}.`;
    } else {
      return "You have no todos.";
    }
  }
  if (command === "what day is it today") {
    const today = new Date();
    return `Today is ${today}`;
  }

  if (command.startsWith("what is ")) {
    const expression = command.replace("what is ", "");
    try {
      const result = eval(expression);
      return `The result is ${result}.`;
    } catch (error) {
      return "Sorry, I can't calculate that.";
    }
  }
  if (command.startsWith("set a timer for ")) {
    const time = command
      .replace("set a timer for ", "")
      .replace(" minutes", "")
      .trim();
    const minutes = parseInt(time, 10);
    if (isNaN(minutes)) {
      return "Please provide a valid number of minutes.";
    } else {
      setTimeout(() => {
        console.log("Timer done");
      }, minutes * 60 * 1000);
      return `Timer set for ${minutes} minutes.`;
    }
  }
  if (command === "tell me a joke") {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }
  return "Sorry, I didn't understand that command.";
}
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you, Benjamin."
console.log(getReply("What is my name")); // "Your name is Benjamin."
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo."
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo."
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo."
console.log(getReply("What is on my todo")); // "You have 1 todos: singing in the shower."
console.log(getReply("What day is it today")); // "Today is 24. of June 2024." (or current date)
console.log(getReply("What is 4 + 3")); // "The result is 6."
console.log(getReply("Set a timer for 18 minute")); // "Timer set for 1 minute." (after 1 minute, "Timer done" is logged)
console.log(getReply("Tell me a joke")); // Random joke
