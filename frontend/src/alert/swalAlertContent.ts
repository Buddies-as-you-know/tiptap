export const sendSuccess = {
   title: '送信完了',
   icon: 'success',
   timer: 1500,
   button: false,
}

export const sendError = {
   title: '送信エラー',
   text: '送信できませんでした',
   icon: 'error',
   timer: 1500,
   button: false,
}

export const fetchError = {
   title: '受信エラー',
   text: '受信できませんでした',
   icon: 'error',
   timer: 1500,
   button: false,
}

export const loginError = {
   title: 'ログインできませんでした',
   text: 'メールアドレスまたはパスワードが違います。お手数ですが、通信環境の良いところでもう一度入力してください。',
   icon: 'error',
   button: true,
   closeOnClickOutside: false,
   closeOnEsc: false,
   allowOutsideClick: false,
   allowEscapeKey: false,
}
export const networkError = {
   title: 'エラー',
   text: '通信にエラーが生じたため、強制的にログアウトします。お手数ですが、再度ログインしてください。\n\n考えられる原因：\n*通信環境の悪いところで利用した。\n*セッションが無効',
   icon: 'error',
   button: 'Logout',
   closeOnClickOutside: false,
   closeOnEsc: false,
   allowOutsideClick: false,
   allowEscapeKey: false,
}


export const editWarning = {
   title: '内容は保存されません。',
   text: '終了してもよろしいですか？',
   icon: 'warning',
   buttons: ['編集を続ける', '閉じる'],
   closeOnClickOutside: false,
   closeOnEsc: false,
   allowOutsideClick: false,
   allowEscapeKey: false,
}

