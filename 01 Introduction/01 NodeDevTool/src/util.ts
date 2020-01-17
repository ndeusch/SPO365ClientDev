import * as $ from "jquery";

export class Util {
  log() {
    console.log("hello word logged from Util");
  }  

  getData(){
    $.ajax({
      url: "http://sp2019/_api/lists/getByTitle('News')/Items?$select=Id,Title,Body,Created,Modified",
      type: "GET",
      headers: {
        Accept: "application/json;odata=verbose"
      },
      success: function(data) {
        if (data.d.results) {
          //console.log(data.d.results);
          // items = data.d.results;
          // renderNews(items);
        }
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

}
