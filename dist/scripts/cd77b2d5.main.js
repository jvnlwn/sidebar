function setHeight(){$(".surveys").css("height",(findHeight(0,showX)+25).toString()+"px")}function findHeight(a,b){var c=0;for(a;b>a;a++)c+=parseInt($($(".surveys ul li")[a]).height())+25;return c}function findActive(a){return $(".surveys ul li").each(function(b){$(this).hasClass("active")&&(a=b)}),a}function removeActive(){$(".survey").each(function(){$(this).removeClass("active")})}function upArrow(){$(".up").click(function(){var a=parseInt($(".surveys ul").css("top").slice(1,-2)),b=findActive();if(b>showX-1)$(".surveys ul").css("top","-"+findHeight(0,b-(showX+1)).toString()+"px"),removeActive();else if(!b&&a>$(".surveys").height()){var a=parseInt($(".surveys ul").css("top").slice(0,-2)),c=$(".surveys").height(),d=a+c;$(".surveys ul").css("top",d.toString()+"px")}else $(".surveys ul").css("top","0px")})}function downArrow(){$(".down").click(function(){removeActive();var a=Math.abs(parseInt($(".surveys ul").css("top").slice(0,-2))),b=$(".surveys ul").height(),c=$(".surveys").height();b-a>c&&$(".surveys ul").css("top","-"+(a+c).toString()+"px")})}var text=["How to Diagnose a Mongoose","Stuff You Never Thought You Should Know","Everything is Good. Life Is Great","What's the Deal with Deadlines Anyways?","Keeron is Awesome and He Knows Whats Up","This One is Short","This One is So Long I Don't Even Know What to Do About It","How is This Ever Going to Work","When Will This End?","I Hope I Know What I'm Doing","How to Diagnose a Mongoose","Stuff You Never Thought You Should Know","Everything is Good. Life Is Great","What's the Deal with Deadlines Anyways?","Keeron is Awesome and He Knows Whats Up","This One is Short","This One is So Long I Don't Even Know What to Do About It","How is This Ever Going to Work","When Will This End?","I Hope I Know What I'm Doing"],showX=7;Survey=Backbone.View.extend({tagName:"li",className:"survey",events:{click:"select"},initialize:function(a){this.options=a,console.log("hey new view"),$(".surveys ul").append(this.el),this.render()},render:function(){this.$el.text(this.options.text.toUpperCase()),this.$el.append('<div class="survey-arrow"></div>')},select:function(){$(".survey").each(function(){$(this).css("color","rgb(71, 86, 90)"),$(this).removeClass("active")}),this.$el.css("color","#FFF");var a=findHeight(0,this.options.index-1);$(".surveys ul").css("top","-"+a.toString()+"px"),this.$el.addClass("active"),setHeight(),this.moveArrow()},moveArrow:function(){var a=findHeight(this.options.index-1,this.options.index),b=findHeight(this.options.index,this.options.index+1),c=$(".survey-arrow").height(),d=a+b/2+c/2;$(".survey-arrow").css("bottom",d.toString()+"px"),console.log(d)}}),text.forEach(function(a,b){new Survey({text:a,index:b})}),setHeight(),upArrow(),downArrow();