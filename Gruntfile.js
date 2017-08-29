module.exports = function(grunt) {
    grunt.initConfig({
        // running `grunt less` will compile once
        less: {
            development: {
                options: {
                    paths: ["./public/stylesheets"],
                    yuicompress: true
                },
            files: {
                "./public/stylesheets/navbar.css": "./public/stylesheets/navbar.less"
            }
        }
    },
    // running `grunt watch` will watch for changes
    watch: {
        files: "./public/stylesheets/*.less",
        tasks: ["less"]
    }
});
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};