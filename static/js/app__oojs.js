/*--------------------------------------------------------------------------
 *
 * Created      : 15/02/2016
 * Modified     : 
 * UI Developer : Anand Deep Singh
 * Description 	: This is basic example of OOJS which inclues :- NameSpacing, Private Function, Private Variables, Encapsulation and Inheritance
 
 * @dependency	: index.html
 ---------------------------------------------------------------------------*/

/**
* It's a self invokated function that runs automatically/immediately.
*
* @constructor
*/
	
	"use strict";

	var __private = {

		_config: {
			
			DOMObjects: {
				$expandCollapseButton	:	$(".expandCollapseButton"),
				$clientListAnchor		:	$(".clients-list a"),
				$customSelectBox		:	$(".custom-selectBox-control"),
				$historyButton			:	$(".show-history-btn"),
				$historyContainer		:	$(".show-history-container"),
				$clientDetailWrapper	:	$(".client-details-wrapper"),
				$lightBoxCloseButton	:	$(".glyphicon-remove"),
				$editButton				:	$(".edit-button"),
				$clientPopupDetails 	:	$(".client-popup-details"),
				$tileList				:	$(".tiles-list"),
				$dataTableIcon			:	$(".data-table-icon"),
				$dataTileIcon			:	$(".data-tile-icon"),
				$bondHolding			:	$(".bond-holding"),
				$companyLevelHolding	:	$(".company-level-holdings"),
				$companyHoldingTable	:	$(".company-holdings-table")
			}
		},
		
		expandCollapse : function(){
			
				var _this = this,
					_expand 			= 	_this._config.DOMObjects.$expandCollapseButton.data("open"),
					_collapse 			= 	_this._config.DOMObjects.$expandCollapseButton.data("close"),
					_clientButtonValue 	= 	_this._config.DOMObjects.$expandCollapseButton.find(".button-open-close").text().trim(),
					$allClientSection 	= 	$(".all-client-section");
				
				if( _clientButtonValue === "Expand" ){
					_this._config.DOMObjects.$expandCollapseButton.find(".button-open-close").text(_collapse);
					_this._config.DOMObjects.$expandCollapseButton.find(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
					_this._config.DOMObjects.$expandCollapseButton.parent().removeClass("all-client-section");
					
				}
				
				if( _clientButtonValue === "Collapse" ){
					_this._config.DOMObjects.$expandCollapseButton.find(".button-open-close").text(_expand);
					_this._config.DOMObjects.$expandCollapseButton.find(".glyphicon").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
					_this._config.DOMObjects.$expandCollapseButton.parent().addClass("all-client-section");
				}
		},

		clientHover : function(){
			var _that = this;

			_that._config.DOMObjects.$clientListAnchor.hover(function(){
				var _this = this;
				if($(_this).siblings(".quick-client-feedback").hasClass("hide")){
					$(_this).siblings(".quick-client-feedback").removeClass("hide").addClass("show");
				}
			}, function(){
				var _this = this;
				if($(_this).siblings(".quick-client-feedback").hasClass("show")){
					$(_this).siblings(".quick-client-feedback").removeClass("show").addClass("hide");
				}
			})
		},

		openSelectBox : function(element){

			var _this = element;	// private
				
			// for show and hide of options
			if($(_this).next("ul").hasClass("hide")){
				$(_this).next("ul").removeClass("hide").addClass("show");
				$(_this).find(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
			}else{
				$(_this).next("ul").removeClass("show").addClass("hide");
				$(_this).find(".glyphicon").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
			
			}
		},
		
		customSelectBoxLi : function(){
			
			$(".custom-selectBox").find("li").on("click", function(){
		
				var _this = this,
					dataValue = $(this).data("value"),
					selectedText = $(this).text();
				
				$(_this).parent().parent().find(".custom-selectBox-selectedValue").text(selectedText).attr("data-value",dataValue);
				$(_this).parent().removeClass("show").addClass("hide");
					
				$(_this).parent().parent().find(".glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");		
			})
		},

		openHistory : function(){
			
			var _that = this,
				_parentClientContainerHeight = _that._config.DOMObjects.$clientDetailWrapper.height();
				_parentClientContainerHeight = _parentClientContainerHeight - 20;
			
			if(_that._config.DOMObjects.$historyContainer.hasClass("hide")){
				_that._config.DOMObjects.$historyContainer.height(_parentClientContainerHeight).removeClass("hide").addClass("show");
			}
		},

		closeLightBox	: function(){
			
			var _this = this;
			$(_this).parents(".show").removeClass("show").addClass("hide");			
		},
		
		editFeedback : function(){
			
			var _that = this,
				$addClientDesc = $(".add-client-description"),
				$clientDescWrapper = $(".client-description-wrapper");

			
			if($addClientDesc.hasClass("hide")){
				
				$addClientDesc.val("").removeClass("hide").addClass("show");		// removing 
				$clientDescWrapper.removeClass("show").addClass("hide");
				__private._config.DOMObjects.$editButton.removeClass("glyphicon-edit").addClass("glyphicon-ok");
				
			}else{
				var _liveClientDescription = $addClientDesc.val(),
					_liveClientDescriptionLen = _liveClientDescription.length;
				
				if(_liveClientDescriptionLen > 0){
					$clientDescWrapper.find(".client-description").text(_liveClientDescription);
				}
				
				$addClientDesc.removeClass("show").addClass("hide");
				$clientDescWrapper.removeClass("hide").addClass("show");
				__private._config.DOMObjects.$editButton.removeClass("glyphicon-ok").addClass("glyphicon-edit");
			}
		},
		
		openRecommendation : function(){
			
			var $clientDetailWrapper = $(".client-details-wrapper"),
				_parentClientContainerHeight = $clientDetailWrapper.height()- 20;
		
			if(__private._config.DOMObjects.defaults.$clientPopupDetails.hasClass("hide")){
				__private._config.DOMObjects.defaults.$clientPopupDetails.height(_parentClientContainerHeight).removeClass("hide").addClass("show");
			}
		},
		
		openTableView : function(){
			
			var $bondTableView = $(".bond-table-view"),
				$bondTileView = $(".bond-tile-view");

				$bondTableView.removeClass("hide").addClass("show");
				$bondTileView.removeClass("show").addClass("hide");
		},

		openTileView : function(){
			
			var $bondTableView = $(".bond-table-view"),
				$bondTileView = $(".bond-tile-view");

			$bondTableView.removeClass("show").addClass("hide");
			$bondTileView.removeClass("hide").addClass("show");
		},
		
		openBondHolding : function(){
			
			var _that = this,
				_height = __private._config.DOMObjects.$clientPopupDetails.height()+52;
				
				if(__private._config.DOMObjects.$companyLevelHolding.hasClass("hide")){
					__private._config.DOMObjects.$companyLevelHolding.height(_height).removeClass("hide").addClass("show");
				}else{
					__private._config.DOMObjects.$companyLevelHolding.removeClass("show").addClass("hide");
				}
		},

		openCompanyLevelHolding : function(){

			var $companyLevelHolding = $(".company-level-holdings"),
				$companyLevelHoldingLevel2 = $(".company-level-holdings-2"),
				_height = $companyLevelHolding.height();
		
				if($companyLevelHoldingLevel2.hasClass("hide")){
					$companyLevelHoldingLevel2.height(_height).removeClass("hide").addClass("show");
				}else{
					$companyLevelHoldingLevel2.removeClass("show").addClass("hide");
				}
		}
		
	};

	
	
	var application = {

		init: function() {
		  this.bindEvents();
		},
		
		bindEvents : function(){

			__private._config.DOMObjects.$expandCollapseButton.on("click", function(){
				__private.expandCollapse();
			});

			__private.clientHover();

			
			__private._config.DOMObjects.$customSelectBox.on("click", function(){
				
				__private.openSelectBox(this);
				__private.customSelectBoxLi();
			});

			

			__private._config.DOMObjects.$historyButton.on("click", function(e){
				e.preventDefault();
				__private.openHistory();
			});
			

			
			__private._config.DOMObjects.$lightBoxCloseButton.on("click", function(e){
				e.preventDefault();

				//__private.closeLightBox();
				
				var _this = this;
				$(_this).parents(".show").removeClass("show").addClass("hide");
			});
			
			
			__private._config.DOMObjects.$editButton.on("click", function(){
				var _this = this;
				__private.editFeedback();
			});
			
			__private._config.DOMObjects.$tileList.find("li").on("click", function(e){
				e.preventDefault();
				__private.openRecommendation();

			});
			
			__private._config.DOMObjects.$dataTableIcon.on("click", function(){
				__private.openTableView();
			});

			__private._config.DOMObjects.$dataTileIcon.on("click", function(){
				__private.openTileView();
			});
			
			
			__private._config.DOMObjects.$bondHolding.on("click", function(){
				__private.openBondHolding();
			});

			__private._config.DOMObjects.$companyHoldingTable.on("click", "span", function(e){
				
				__private.openCompanyLevelHolding();
			});
		}
	};

  return application;

})(jQuery, this,this.document);
//})(document, window);
//We also can auto-initialize the app by adding a `.init()`, like this:
//})(document, window).init();



// Initialize app
