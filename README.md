# Hello world javascript action

... a GitHub action to import test results into Vansah for Jira

# Setup
## Configure the workflow
    runs-on: ubuntu-latest
    steps:
      -name: Sending results file to Vansah for Jira
      - uses: kawnkush/VansahIntegration@v10
        with:
            vansahToken: ${{secrets.vansahToken}}
            testPaths: "dummy.txt"
            log_identifier: 11050
            comment: "311331"
