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
                "./public/stylesheets/styles.css": "./public/stylesheets/styles.less",
                 "./public/stylesheets/navbar.css": "./public/stylesheets/navbar.less",
                 "./public/stylesheets/projects.css": "./public/stylesheets/projects.less",
                "./public/stylesheets/header.css": "./public/stylesheets/header.less",
                "./public/stylesheets/contact.css": "./public/stylesheets/contact.less"

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