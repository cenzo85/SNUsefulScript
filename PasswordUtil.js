var Encrypter = new GlideEncrypter();
var gr = new GlideRecord('sys_auth_profile_basic');
gr.query();
while (gr.next()) {
	var encrypted = gr.password;
	var decrypted = Encrypter.decrypt(encrypted);  
  gs.print(gr.username+' --> '+decrypted);
}
