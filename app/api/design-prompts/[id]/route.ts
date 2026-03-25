import { getRemoteDesignPrompt } from "@/lib/design-prompt-service";

export async function GET(
  _request: Request,
  context: RouteContext<"/api/design-prompts/[id]">,
) {
  const { id } = await context.params;
  const prompt = await getRemoteDesignPrompt(id);

  if (!prompt) {
    return Response.json(
      {
        error: "Prompt not found",
      },
      {
        status: 404,
      },
    );
  }

  return Response.json(prompt, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
