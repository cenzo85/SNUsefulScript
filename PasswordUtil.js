
var Encrypter = new GlideEncrypter();
var user_name='ws_user_remedy';
var utente = new GlideRecord('sys_user');
if (utente.get('user_name',user_name)){
	var password = Encrypter.decrypt(utente.user_password);
	gs.print(utente.user_name+'--'+password);
}
