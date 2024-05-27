let pass = ''
let passConfirm = ''

document.getElementById("password").addEventListener('keyup', function() {
  pass = this.value
  console.log(pass)
})

document.getElementById("confirm-password").addEventListener('keyup', function() {
  passConfirm = this.value
  console.log(passConfirm)
  if (pass != passConfirm) {
    document.getElementById("confirm-password").setCustomValidity("Passwords need to match.")
  } else {
    document.getElementById("confirm-password").setCustomValidity("")
  }
})