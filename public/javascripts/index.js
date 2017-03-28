require.config({
    baseUrl: "/javascripts/core",
    paths: {
        "jquery": "jquery-3.1.0"
    }
});

require(["jquery"], function () {
    $("#title").text("誓词");
});