FROM denoland/deno:2.2.11

WORKDIR /app

COPY deno.json .

RUN deno install

COPY . .
RUN deno cache main.ts

ARG PORT=8092
EXPOSE $PORT

CMD ["task", "start"]
