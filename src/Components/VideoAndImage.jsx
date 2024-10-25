import React, { useEffect } from "react";
import { ViewMaster } from "../ViewMaster";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TableData from "./TableData";
import DownloadIcon from "@mui/icons-material/Download";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import {
  endVideoRequest,
  fetchVideoAndImageRequest,
  startVideoRequest,
} from "../redux/action/v&iAction";

function VideoAndImage() {
  const videoData = useSelector((state) => state.video.videoData);
  console.log(videoData);
  const dispatch = useDispatch();

  const columns = [
    { id: "id", label: "Video And Image ID", align: "center" },
    { id: "startTime", label: "Start Time", align: "center" },
    { id: "endTime", label: "End Time", align: "center" },
    { id: "recordType", label: "Type", align: "center" },
    {
      id: "action",
      label: "Action",
      align: "center",
      render: (row) => (
        <Box display="flex" alignItems="center" justifyContent={"center"}>
          <DownloadIcon
            style={{ cursor: "pointer", marginRight: 8 }}
            onClick={() => handleDownload(row)}
          />
          <VideocamOffIcon
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => handleEndVideo(row.id)}
          />
        </Box>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchVideoAndImageRequest());
  }, [dispatch]);

  const handleDownload = (row) => {
    window.open(
      `http://localhost:8080/api/log-records/download-video?recordType=${row.recordType}`,
      "_blank"
    );
  };

  const handleEndVideo = (id) => {
    dispatch(endVideoRequest(id));
  };

  const handleStartVideo = (data) => {
    const recordType = data ? "VIDEO" : "IMAGE";
    dispatch(startVideoRequest({ recordType }));
  };

  return (
    <Box>
      <Box display={"flex"} justifyContent={"end"} mb={2}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleStartVideo(true)}
        >
          Start Video
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginLeft: 1 }}
          onClick={() => handleStartVideo(false)}
        >
          Image
        </Button>
      </Box>
      <TableData columns={columns} rows={videoData} />
    </Box>
  );
}

export default ViewMaster(VideoAndImage);
