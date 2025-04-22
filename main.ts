import { FastMCP } from 'fastmcp';
import { weatherTool } from './tools/getWeather.ts';

const server = new FastMCP({
  name: 'Cogito MCP Server',
  version: '1.0.0',
});

server.addTool(weatherTool);

server.start({
  transportType: 'sse',
  sse: {
    endpoint: '/sse',
    port: 8092,
  },
});
