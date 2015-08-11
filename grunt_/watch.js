module.exports = {
    run_file: {
        files: ["**/*.md","**/*.html","!/_site"],
        tasks: ["shell:run_file"]
    }
}