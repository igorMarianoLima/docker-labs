# Creating containers with bind mount (using CLI)

### Understanding containers and images

"Containers" and "images" are fundamental concepts in Docker.
An **image describes how the container should be**, it contains all dependencies, libraries and configurations to run a container. This helps us avoid environment issues.

> You can think of "image" is a "recipe" describing a consistent way to reproduce the same environment.

**Containers are isolated processes running on host OS, using a image as base**, with their own filesystem, network and environment.

> You can think of a "container" as an instance of an image.

**What are bind mounts in containers?**
When we are working with containers, sometimes we need to make our local files available inside the container, for example while we are developing an application and want to test our code changes inside the container.
**Bind mounts are a "mirror" of local files, not copy.**

### Hands on

`docker container run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx`

#### Explaining the command:

We created a new container using nginx image, mapping the port 80 (Nginx running inside the container) to port 8080 on the host using the `-p` flag. This allows us to access via localhost:8080.
Try it:
`curl http://localhost:8080`

The `-v` flag indicates which host folder should be binded in container. In this case, we binded a local folder (`/html`) to an folder inside container (`/usr/share/nginx/html`).

Now, we can add a new HTML file that it will be automatically binded to container and served. Try check out in: `http://localhost:8080`
