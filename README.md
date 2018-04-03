# Katuk Institution
Online Student Course Registration System for easily managing the semester registration process for the student in an institution

## Setup with nodejs
### Prerequisites
1. Install Node.js® and npm if they are not already on your machine.
2. Clone https://github.com/ajaytiwari52/katuk-institution-ui.git

### Local run
Run below commands
```
npm install
npm serve --open
```
## Setup with springboot
Add below in build
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.codehaus.mojo</groupId>
                <artifactId>exec-maven-plugin</artifactId>
                <executions>
                    <execution>
                        <id>npm-install</id>
                        <phase>generate-sources</phase>
                        <goals>
                            <goal>exec</goal>
                        </goals>
                        <configuration>
                            <executable>${npm.executable}</executable>
                            <workingDirectory>front</workingDirectory>
                            <arguments>
                                <argument>install</argument>
                            </arguments>
                        </configuration>
                    </execution>
                    <!--<execution>-->
                    <!--<id>npm-lint</id>-->
                    <!--<phase>generate-sources</phase>-->
                    <!--<goals>-->
                    <!--<goal>exec</goal>-->
                    <!--</goals>-->
                    <!--<configuration>-->
                    <!--<executable>${npm.executable}</executable>-->
                    <!--<workingDirectory>front</workingDirectory>-->
                    <!--<arguments>-->
                    <!--<argument>run</argument>-->
                    <!--<argument>lint</argument>-->
                    <!--</arguments>-->
                    <!--</configuration>-->
                    <!--</execution>-->
                    <execution>
                        <id>angular-prod-build</id>
                        <phase>generate-sources</phase>
                        <goals>
                            <goal>exec</goal>
                        </goals>
                        <configuration>
                            <executable>${npm.executable}</executable>
                            <workingDirectory>front</workingDirectory>
                            <arguments>
                                <argument>run</argument>
                                <argument>build</argument>
                                <argument>--prod</argument>
                            </arguments>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <executions>
                    <execution>
                        <id>copy-angular</id>
                        <phase>prepare-package</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${project.build.outputDirectory}/static</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${project.basedir}/front/dist</directory>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
    <profiles>
        <profile>
            <id>platform-windows</id>
            <activation>
                <os>
                    <family>windows</family>
                </os>
            </activation>
            <properties>
                <npm.executable>npm.cmd</npm.executable>
            </properties>
        </profile>
        <profile>
            <id>platform-unix</id>
            <activation>
                <os>
                    <family>unix</family>
                </os>
            </activation>
            <properties>
                <npm.executable>/usr/local/bin/npm</npm.executable>
            </properties>
        </profile>
    </profiles>
