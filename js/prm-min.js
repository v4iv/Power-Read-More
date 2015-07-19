/*
 *Power-Read-More Version 1.0.0
 *https://github.com/v4iv/Power-Read-More
 *Copyright 2015 Vaibhav Sharma
 *
 *Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 *You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *Unless required by applicable law or agreed to in writing, software
 *distributed under the License is distributed on an "AS IS" BASIS,
 *WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *See the License for the specific language governing permissions and
 *limitations under the License.
 */
$(document).ready(function(){var d=1000 /*default visible characters*/;var a="...";var b="Read More";var c="Less";$(".powerreadmore").each(function(){var g=$(this).html();if(g.length>d){var i=g.substr(0,d);var f=g.substr(d,g.length-d);var e=i+'<span class="moreDots">'+a+'&nbsp;</span><span class="contentWrapper"><span>'+f+'</span>&nbsp;&nbsp;<a href="" class="expandLink">'+b+"</a></span>";$(this).html(e)}});$(".expandLink").click(function(){if($(this).hasClass("collapse")){$(this).removeClass("collapse");$(this).html(b)}else{$(this).addClass("collapse");$(this).html(c)}$(this).parent().prev().toggle();$(this).prev().toggle();return false})});
