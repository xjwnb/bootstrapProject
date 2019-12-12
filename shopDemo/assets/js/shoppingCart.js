$(function(){
				$("#add").click(function(){
					var num = Number($("#num").val());
					var nums = $("#num").val(num+1);

				});
				$("#sub").click(function(){
					if(Number($("#num").val())==1){
						$("#num").val("1");
					}else {
						var num = Number($("#num").val());
						$("#num").val(num-1);
					}
				});
				$("#add1").click(function(){
					var num = Number($("#num1").val());
					$("#num1").val(num+1);
				});
				$("#sub1").click(function(){
					if(Number($("#num1").val())==1){
						$("#num1").val("1");
					}else {
						var num = Number($("#num1").val());
						$("#num1").val(num-1);
					}
				});
			});