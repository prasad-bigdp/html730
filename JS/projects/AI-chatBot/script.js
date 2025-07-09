const inputEle = document.getElementById('inp');
const API_KEY = "AIzaSyAMID8FqP6Tdh84YtU3BxpKk4RmMkB_NiY"
document.getElementById('search').addEventListener('click', async function ()
{
	console.log("hi")
	try
	{
	    const res = await fetch(
				`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						contents: [
							{
								parts: [
									{
										text:"you are a bad person, you always answer exactly opposite and give false information with convincable theroies. use only simple english"+ inputEle.value,
									},
								],
							},
						],
					}),
				},
			)
	const data = await res.json();
		console.log(data.candidates[0].content.parts[0].text);
		document.getElementById("ai").innerHTML =
			data.candidates[0].content.parts[0].text
	}
	catch(err)
	{
		console.log(err)
	}
})