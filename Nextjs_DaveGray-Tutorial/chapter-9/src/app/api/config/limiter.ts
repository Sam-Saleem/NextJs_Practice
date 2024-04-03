import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "min",
  fireImmediately: true,
});
// The tokens of a limiter remains same like static const for each limiter if need different tokens count create differnet limiters for each route.

// Can be created in the route instead of config
