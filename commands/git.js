const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed = new EmbedBuilder()
  .setColor("#F54C4C")
  .setTitle("Comandos do Git")
  .setThumbnail("https://cdn.freebiesupply.com/logos/thumbs/2x/git-logo.png")
  .addFields(
    { name: "\u200B", value: "\u200B" },
    { name: "git init", value: "Inicializa o Git no Diretório", inline: true },
    { name: "git add", value: "Adiciona arquivo ao commit", inline: true },
    { name: "git commit", value: "Adiciona o Commit", inline: true },
    { name: "\u200B", value: "\u200B" },
    { name: "git checkout -b", value: "Cria uma nova branch", inline: true },
    {
      name: "git status",
      value: "Exibe as condições do diretório de trabalho",
      inline: true,
    },
    {
      name: "git push",
      value: "Envia o conteúdo do repositório local para um repositório remoto",
      inline: true,
    }
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Relembrar Comandos do GIT"),

  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
