const { AppConfigDataClient, StartConfigurationSessionCommand, GetLatestConfigurationCommand } = require("@aws-sdk/client-appconfigdata");

// Update 'us-east-1' to your actual AWS region if different
const client = new AppConfigDataClient({ region: "us-east-1" });

async function getAppConfig() {
  try {
    // 1. Start the session
    // REPLACE these strings with the actual IDs from your CLI setup
    const session = await client.send(new StartConfigurationSessionCommand({
      ApplicationIdentifier: "MyDemoApp",
      EnvironmentIdentifier: "Development",
      ConfigurationProfileIdentifier: "FeatureToggles"
    }));

    // 2. Fetch the configuration data
    const config = await client.send(new GetLatestConfigurationCommand({
      ConfigurationToken: session.InitialConfigurationToken
    }));

    // 3. Decode the binary response (AppConfig returns a Uint8Array)
    const decodedConfig = new TextDecoder().decode(config.Configuration);
    
    console.log("--- AppConfig Retrieval Success ---");
    console.log("Config Data:", JSON.parse(decodedConfig));
    
  } catch (error) {
    console.error("Error fetching config:", error.message);
  }
}

getAppConfig();
