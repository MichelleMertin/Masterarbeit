class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  antwort = () => {
    const message = this.createChatBotMessage("Mir gehts gut und dir?");
    this.addMessageToState(message);
  };

  chooseGenre = () => {
    //evtl. Internet
    const message = this.createChatBotMessage(
      "Mein Vorschlag für dich: [Hier sollte jetzt ein Bild erscheinen]",
      {
        widget: "choices"
      }
    );
    this.addMessageToState(message);
  };

  buyBook = () => {
    const message = this.createChatBotMessage(
      "Alles klar, ich habe das Buch in deinen Warenkorb gelegt.",
      {
        widget: "newChoices"
      }
    );
    this.addMessageToState(message);
  };

  endConv = () => {
    const message = this.createChatBotMessage(
      "Du kannst das Browserfenster nun schließen. Bis bald!"
    );
    this.addMessageToState(message);
  };

  criticizeRec = () => {
    const message = this.createChatBotMessage("Was gefällt dir nicht?", {
      widget: "checkbox"
    });
    this.addMessageToState(message);
  };

  askRec = () => {
    const message = this.createChatBotMessage(
      "Ich habe dir das Buch empfohlen, da...",
      {
        widget: "choices"
      }
    );
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz"
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  };
}

export default ActionProvider;
