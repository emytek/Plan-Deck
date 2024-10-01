module.exports = {
    apps: [
      {
        name: "plan-deck",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };
  