const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("commands")
    .setDescription("Shows the list of all available commands")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Enter the commands category")
        .addChoices(
          {
            name: "Economy",
            value: "economy",
          },
         
          {
            name: "Utility",
            value: "utility",
          }
        )
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const category = interaction.options.getString("category");

    if (category === "economy") {
      const embed = new discord.EmbedBuilder()
        .setColor("#f773d9")
        .setThumbnail(client.user.displayAvatarURL({ size: 512 }))
        .setTitle("Economy commands")
        .setDescription(
          "`balance`, `monthly`"
        )
        .setFooter({
          text: "I only have slash commands",
        });

      await interaction.reply({
        embeds: [embed],
      });
    } else if (category === "ecomod") {
      const embed = new discord.EmbedBuilder()
        .setColor("#f773d9")
        .setThumbnail(client.user.displayAvatarURL({ size: 512 }))
        .setTitle("Eco-Mod commands")
        .setDescription("`addcoins`, `removecoins`")
        .setFooter({
          text: "I only have slash commands",
        });

      await interaction.reply({
        embeds: [embed],
      });
    } else if (category === "utility") {
      const embed = new discord.EmbedBuilder()
        .setColor("#f773d9")
        .setThumbnail(client.user.displayAvatarURL({ size: 512 }))
        .setTitle("Utility commands")
        .setDescription(
          "`ping`, `invite`, `info`"
        )
        .setFooter({
          text: "I only have slash commands",
        });

      await interaction.reply({
        embeds: [embed],
      });
    }
  },
};
