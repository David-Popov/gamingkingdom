#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["GamingKindom_API/GamingKindom_API.csproj", "GamingKindom_API/"]
COPY ["Data/Data.csproj", "Data/"]
COPY ["Entities/Entities.csproj", "Entities/"]
COPY ["Services/Services.csproj", "Services/"]
COPY ["Util/Util.csproj", "Util/"]
RUN dotnet restore "./GamingKindom_API/GamingKindom_API.csproj"
COPY . .
WORKDIR "/src/GamingKindom_API"
RUN dotnet build "./GamingKindom_API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./GamingKindom_API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GamingKindom_API.dll"]