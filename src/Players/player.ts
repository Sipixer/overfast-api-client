import { career } from "./career";
import { summary } from "./summary";

export const player = (player_id: string) => {
  player_id = player_id.replace("#", "-");
  return {
    summary: summary(player_id),
    career: career(player_id),
  };
};
