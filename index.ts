import { createApp, setupGracefulShutdown } from './app';
import { initializeConnections } from './database/connection';
import { config } from './config';
import { logger } from './utils/logger';

const startServer = async () => {
  try {
    logger.info('Starting Reporting Service', {
      nodeEnv: config.nodeEnv,
      port: config.port,
    });

    // Initialize database connections
    await initializeConnections();

    // Create and start the Express app
    const app = await createApp();
    const server = app.listen(config.port, () => {
      logger.info(`Reporting service listening on port ${config.port}`, {
        port: config.port,
        nodeEnv: config.nodeEnv,
      });
    });

    // Setup graceful shutdown
    setupGracefulShutdown(server);

  } catch (error) {
    logger.error('Failed to start reporting service', { error });
    process.exit(1);
  }
};

// Start the server
startServer();