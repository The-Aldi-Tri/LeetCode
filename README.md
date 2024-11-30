# LeetCode

This is my repository for storing solutions to the problems I've completed on `LeetCode`. Each solution is organized by problem number and title.

## Running Solutions

To run the solutions in this repository, you can use the provided development container environment. The devcontainer setup provides a pre-configured environment with all necessary tools, including Node.js, TypeScript, and ts-node.

### Prerequisites

    Make sure you have the following installed on your system

    1. Docker
    
    2. Visual Studio Code (VS Code) with the Dev Containers extension

### Running with DevContainer

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Open the repository in VS Code:

    Launch VS Code and open the cloned repository.

3. Reopen in DevContainer:

    Once the repository is opened in VS Code, you'll be prompted to reopen the folder in a container (if you're using the Dev Containers extension). If not, you can manually reopen the folder in the container by clicking on the Dev Containers icon in the bottom-left corner and selecting `Reopen in Container`.

    This will set up the environment as defined in the .devcontainer folder (which includes a devcontainer.json and potentially a Dockerfile), ensuring that all required tools are installed and configured.

4. Run the Solution:

    Once the devcontainer is built and you're inside the container environment, you can run any TypeScript solution by opening a terminal in VS Code and using the following command:

    ```bash
    ts-node <filename>.ts
    ```

    Make sure to replace <filename> with the actual name of the TypeScript file containing the solution.
