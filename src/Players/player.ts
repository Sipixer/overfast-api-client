import { career } from "./career";
import { summary } from "./summary";

export const player = (player_id: string) => {
  return {
    summary: summary(player_id),
  };
};
