const prompts = require(`prompts`);

(async () => {
  const response = await prompts({
    type: "number",
    name: "value",
    message: "How many films do you want on the shortlist?",
    validate: (value) =>
      value < 2 ? `Shortlist must have more than one film.` : true,
  });

  console.log(`Shortlist with ${response.value} films will be generated`);
})();
