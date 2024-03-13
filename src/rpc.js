import rpc from 'discord-rpc';

const client = new rpc.Client({ transport: 'ipc' });

const clientId = '1210439032262103040';

const presence = {
  details: 'Tiva tauri',
  startTimestamp: new Date(),
  largeImageKey: 'newest',
  largeImageText: 'tiva tauri',
  smallImageKey: 'newest',
  smallImageText: 'Tiva tauri',
  instance: false,
};

client.login({ clientId }).catch(console.error);

client.once('ready', () => {
  console.log('Connected to Discord RPC');
  client.setActivity(presence).catch(console.error);
});

process.on('SIGINT', () => {
  client.clearActivity().catch(console.error);
  client.destroy();
  process.exit();
});
