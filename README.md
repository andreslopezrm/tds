# Tip Land the SaaS platform for the tip of the day

Tip Land is a platform as a service for product creators and that can easily integrate the functionality of the tip of the day.

Many products today include daily tips for their best use in their interface, such as code editors, management systems among many others, Tip Land provides you with a platform with which you can create those tips for your products, through a API Key assigned to your account you can access the endpoint.

Made with **Re2 Stack** (_Remix + Redis = Re2 Stack_)

When two blazing-fast technologies come together to bring out the best of each other, something amazing happens:

> In Remix the global state is the database and the database is the cache in Redis Stack.

**Social Login**
![Social Login](https://tip-land.vercel.app/images/login.png)

**Dashboard**
![Dashboard](https://tip-land.vercel.app/images/dashboard.png)

**Tips**
![Tips](https://tip-land.vercel.app/images/tiplist.png)

**API Key**
![Api Key](https://tip-land.vercel.app/images/apikey.png)

**Stats**
![Stats](https://tip-land.vercel.app/images/stats.png)


# Overview video

[![Embed your YouTube video](https://i.ytimg.com/vi/yhhfZTNStGw/maxresdefault.jpg)](https://youtu.be/yhhfZTNStGw)

## How it works


![Stack](https://tip-land.vercel.app/images/stack.png)
**Stack**


### How the data is stored:

![Database](https://tip-land.vercel.app/images/database.png)
**Database**

The project manages persistence through the [Redis OM for Node.js](https://github.com/redis/redis-om-node), for the tips of the day we have the following properties

Tip

- description: string
- categoryId: string
- userId: string
- createAt: Date

To start data management with Redis, a function is performed that creates a client that receives the connection url from the environment variables.

```javascript
import { Client } from "redis-om";

const redisClient = new Client();

async function redisConnect () {
    if (!redisClient.isOpen()) {
      await redisClient.open(process.env.REDIS_URL);
    }
};

export { redisClient, redisConnect };
```

Once having the connection, the Tip class is created, with its interface to define its attributes in Typescript and the schema

```typescript
export interface Tip {
    description: string;
    categoryId: string;
    userId: string;
    createAt: Date;
    category?: Category
}

export class Tip extends Entity {}

const tipSchema = new Schema(Tip, {
    description: { type: "string" },
    categoryId: { type: "string", indexed: true },
    userId: { type: "string", indexed: true },
    createAt: { type: "date", sortable: true }
});
```

Through generating a repository is where the connection between the client and the schema is made

```typescript
async function getTipRepository(): Promise<Repository<Tip>> {
    await redisConnect();
    const repository = redisClient.fetchRepository(tipSchema);
  
    await repository.createIndex();
    return repository;
}
```

The createTip function generates a tip entity based on the user's identifier
```typescript
export async function createTip({ userId, description, categoryId } : TipCreate) : Promise<Tip> {
    const repository = await getTipRepository();
    return repository.createAndSave({ userId, description, categoryId, createAt: new Date() });
}
```

On the user interface side through the action function defined in Remix is where the form information is obtained and the createTip function is called

```typescript
export async function action({ request }: ActionArgs) {
    const { userId } = await getAuth(request);

    if(!userId) {
        return redirect("/sign-up");
    }

    const formData = await request.formData();
    const intent = formData.get("intent") as IntentType; 
    
    if(intent === "create") {
        const description = formData.get("description") as string;
        const categoryId = formData.get("categoryId") as string;

        const tip = await createTip({ userId, categoryId, description });
        return json({ intent, tip });
    } 
    
}
```

### How the data is accessed:

Through the getAllTipsByUserPaging function, the user identifier, the offset, and the elements that are consulted in total in the paging are received

```typescript
export async function getAllTipsByUserPaging({ userId, offset = 0, perPage = 1}: TipSearch): Promise<Tip[]> {
    const repository = await getTipRepository();

    return repository.search()
            .where("userId")
            .equals(userId)
            .sortDescending("createAt")
            .return
            .page(offset, perPage);
}
```

On the user interface side, Remix determines that the loader function is in charge of calling the functions that access the data.

```typescript
export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }
    const offset = getQueryIntParameter(request, "offset", 0);
    const perPage = getQueryIntParameter(request, "per_page", 200); 

    const [total, plainTips, categories] = await Promise.all([ 
        countAllTipsByUser(userId), 
        getAllTipsByUserPaging({ userId, offset, perPage }), 
        getAllCategoriesByUser(userId) 
    ]);

    const tips = getTipsWithCategory({ tips: plainTips, categories });
    return json({ total, tips, categories, offset, perPage });
}
```
## How to run it locally?

### Prerequisites

- Node >= v14.0.0
- Redis Cloud account
- Clerk dev account

### Local installation

Create an .env file with the environment variables shown in the env.example file

```
REDIS_URL=

CLERK_FRONTEND_API=

CLERK_API_KEY=

CLERK_JWT_KEY=
```

Install dependencies

```bash
npm install
```


Run development mode

```bash
npm run dev
```


## Deployment

To make deploys work, you need to create free account on [Redis Cloud](https://redis.info/try-free-dev-to)

Also the [Clerk](https://clerk.dev/) for handling authentication.

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fandreslopezrm%2Ftip-land&env=REDIS_URL,CLERK_FRONTEND_API,CLERK_API_KEY,CLERK_JWT_KEY&envDescription=Create%20an%20acount%20in%20Redis%20Cloud%20and%20Clerk%20Dev&project-name=remix-redis-cloud-project&repo-name=remix-redis-cloud)

## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. If you still have questions, feel free to ask them in the [Redis Discord](https://discord.gg/redis) or on [Twitter](https://twitter.com/redisinc).

### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
    - [Redis OM .NET (C#)](https://github.com/redis/redis-om-dotnet)
        - Watch this [getting started video](https://www.youtube.com/watch?v=ZHPXKrJCYNA)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-dotnet/)
    - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
        - Watch this [getting started video](https://www.youtube.com/watch?v=KUfufrwpBkM)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-node/)
    - [Redis OM Python](https://github.com/redis/redis-om-python)
        - Watch this [getting started video](https://www.youtube.com/watch?v=PPT1FElAS84)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-python/)
    - [Redis OM Spring (Java)](https://github.com/redis/redis-om-spring)
        - Watch this [getting started video](https://www.youtube.com/watch?v=YhQX8pHy3hk)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-spring/)

The above videos and guides should be enough to get you started in your desired language/framework. From there you can expand and develop your app. Use the resources below to help guide you further:

1. [Developer Hub](https://redis.info/devhub) - The main developer page for Redis, where you can find information on building using Redis with sample projects, guides, and tutorials.
1. [Redis Stack getting started page](https://redis.io/docs/stack/) - Lists all the Redis Stack features. From there you can find relevant docs and tutorials for all the capabilities of Redis Stack.
1. [Redis Rediscover](https://redis.com/rediscover/) - Provides use-cases for Redis as well as real-world examples and educational material
1. [RedisInsight - Desktop GUI tool](https://redis.info/redisinsight) - Use this to connect to Redis to visually see the data. It also has a CLI inside it that lets you send Redis CLI commands. It also has a profiler so you can see commands that are run on your Redis instance in real-time
1. Youtube Videos
    - [Official Redis Youtube channel](https://redis.info/youtube)
    - [Redis Stack videos](https://www.youtube.com/watch?v=LaiQFZ5bXaM&list=PL83Wfqi-zYZFIQyTMUU6X7rPW2kVV-Ppb) - Help you get started modeling data, using Redis OM, and exploring Redis Stack
    - [Redis Stack Real-Time Stock App](https://www.youtube.com/watch?v=mUNFvyrsl8Q) from Ahmad Bazzi
    - [Build a Fullstack Next.js app](https://www.youtube.com/watch?v=DOIWQddRD5M) with Fireship.io
    - [Microservices with Redis Course](https://www.youtube.com/watch?v=Cy9fAvsXGZA) by Scalable Scripts on freeCodeCamp