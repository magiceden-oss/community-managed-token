/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export type TransferInstructionArgs = {
  amount: beet.bignum
}
/**
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export const TransferStruct = new beet.BeetArgsStruct<
  TransferInstructionArgs & {
    instructionDiscriminator: number
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['amount', beet.u64],
  ],
  'TransferInstructionArgs'
)
/**
 * Accounts required by the _Transfer_ instruction
 *
 * @property [_writable_] srcAccount
 * @property [_writable_] dstAccount
 * @property [] mint
 * @property [**signer**] owner
 * @property [**signer**] upstreamAuthority
 * @property [] freezeAuthority
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export type TransferInstructionAccounts = {
  srcAccount: web3.PublicKey
  dstAccount: web3.PublicKey
  mint: web3.PublicKey
  owner: web3.PublicKey
  upstreamAuthority: web3.PublicKey
  freezeAuthority: web3.PublicKey
  tokenProgram?: web3.PublicKey
}

export const transferInstructionDiscriminator = 2

/**
 * Creates a _Transfer_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export function createTransferInstruction(
  accounts: TransferInstructionAccounts,
  args: TransferInstructionArgs,
  programId = new web3.PublicKey('CMTQqjzH6Anr9XcPVt73EFDTjWkJWPzH7H6DtvhHcyzV')
) {
  const [data] = TransferStruct.serialize({
    instructionDiscriminator: transferInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.srcAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.dstAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.owner,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.upstreamAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.freezeAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
