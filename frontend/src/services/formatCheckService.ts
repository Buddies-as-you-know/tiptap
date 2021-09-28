export class FormatCheckService {
   //文字のチェック
   public LengthCheck(character: string): boolean {
      const result = character.length > 0 ? true : false
      return result
   }
}
