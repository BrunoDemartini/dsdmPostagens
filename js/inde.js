new Vue({
			el: "#postar",
			data: {
				nome: "",
				texto: "",
				like: 0,
				deslike: 0,
				postagem: [],
			},
			methods: {
				comentar: function() {
					var novaPostagem = {
						nome: this.nome,
						texto: this.texto,

					};
					this.postagem.push(novaPostagem);

				},

				mudarCorL: function(){
					document.getElementById("btnLike").style.backgroundColor = "red"; 
				}
			}
		})

		// function mudarCorL(){
		// 	document.getElementById("btnLike").style.backgroundColor = "red"; 

		// }

		function mudarCorD(){
			document.getElementById("btnDeslike").innerHTML = "<button style='background-color: blue' onclick='mudarCor()'>deslike</button>";

		}
