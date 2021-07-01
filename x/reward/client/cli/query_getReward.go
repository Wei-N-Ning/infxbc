package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/infx/infxbc/x/reward/types"
)

var _ = strconv.Itoa(0)

func CmdGetReward() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "getReward [userId]",
		Short: "Query getReward",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			reqUserId := string(args[0])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetRewardRequest{

				UserId: string(reqUserId),
			}

			res, err := queryClient.GetReward(cmd.Context(), params)
			if err != nil {
				return err
			}
			if res.Reward == nil {
				return nil
			}
			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
