<script>
    const messages = $state(["Hello", "Mother"]);

    let messageInput = $state("");


    function saveMessage() {
        messages.push(messageInput);
        messageInput="";
        // messages=[...messages, messageInput]
        console.log(messages);
    }
</script>

<h1>Messages</h1>

<input bind:value={messageInput} placeholder="Type your message..">
<p>{messages}</p>

<button onclick={saveMessage}>Submit Message</button>