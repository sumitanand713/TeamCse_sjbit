# Use the community-standard eclipse-temurin image
FROM eclipse-temurin:25-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the compiled .jar file into the container
# Make sure your .jar file name is correct!
COPY target/project-0.0.1-SNAPSHOT.jar app.jar

# Make port 8080 available
EXPOSE 8080

# Run the .jar file when the container launches
ENTRYPOINT ["java","-jar","app.jar"]